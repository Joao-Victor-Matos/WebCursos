import Page from "@/app/(auth)/(routes)/sign-in/[[...sign-in...]]/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button>Novo Curso</Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
