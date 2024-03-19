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
import { Delete, Eye, Trash, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function page({ params }: { params: { id: string } }) {
  const students = useQuery(api.users.getStudentsGroup, {
    groupId: params.id,
  });
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
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={student.student}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">{student._id}</TableCell>
                <TableCell>{student.fullName}</TableCell>
                <TableCell className="flex items-center">
                  <Button className="" variant="ghost" size="sm">
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
    </div>
  );
}
