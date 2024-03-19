"use client";
import Spinner from "@/components/ui/Spinner";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, Eye, Trash, Trash2, View } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { formatCamelCase } from "@/lib/format";

export default function page({ params }: { params: { id: string } }) {
  const students = useQuery(api.users.getStudentsGroup, {
    groupId: params.id,
  });
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  return (
    <div>
      {students == undefined ? (
        <Spinner />
      ) : students.length > 0 ? (
        <Table>
          <TableCaption>
            A list of your recent students in this group.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Ordre</TableHead>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Nom Complet</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={student.student}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">{student._id}</TableCell>
                <TableCell>{student.fullName}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell className="flex items-center">
                  <Button
                    className=""
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedStudent(student);
                      setIsViewModalOpen(true);
                    }}
                  >
                    <Eye size={20} />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Trash2 className="text-destructive" size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <span>Pas d'étudiants</span>
      )}

      {isViewModalOpen && (
        <ViewModal
          setIsViewModalOpen={setIsViewModalOpen}
          selectedItem={selectedStudent}
        />
      )}
    </div>
  );
}

type ViewModalProps = {
  setIsViewModalOpen: (value: boolean) => void;
  selectedItem: any;
};

function ViewModal({ setIsViewModalOpen, selectedItem }: ViewModalProps) {
  const fieldsToNotShow = [
    "_id",
    "type",
    "pictureUrl",
    "tokenIdentifier",
    "user",
    "group",
  ];
  return (
    <Modal
      title="View Student"
      setIsModalOpen={setIsViewModalOpen}
      onSave={() => setIsViewModalOpen(false)}
    >
      {/* map through all the object */}
      {Object.entries(selectedItem).map(([key, value]) => {
        if (fieldsToNotShow.includes(key)) return null;
        return (
          <div className="flex items-center justify-between">
            <span className="font-medium capitalize text-gray-500 dark:text-gray-400">
              {formatCamelCase(key)}:
            </span>
            <span className="text-sm">
              {key == "_creationTime"
                ? typeof value === "string" || typeof value === "number"
                  ? new Date(value).toLocaleDateString()
                  : ""
                : String(value)}
            </span>
          </div>
        );
      })}
    </Modal>
  );
}
