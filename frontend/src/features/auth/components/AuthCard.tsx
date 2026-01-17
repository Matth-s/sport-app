import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AuthCardProps = {
  title: string;
  description: string;
  formElement: React.ReactElement;
  footElement: React.ReactElement;
};

const AuthCard = ({
  title,
  description,
  footElement,
  formElement,
}: AuthCardProps) => {
  return (
    <Card className="w-xs">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{formElement}</CardContent>
      <CardFooter>{footElement}</CardFooter>
    </Card>
  );
};

export default AuthCard;
