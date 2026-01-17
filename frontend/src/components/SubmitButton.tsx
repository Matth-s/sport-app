import { Button } from "./ui/button";

type SubmitButtonProps = {
  textButton: string;
  isDisabled: boolean;
  className?: string;
};

const SubmitButton = ({
  textButton,
  isDisabled,
  className,
}: SubmitButtonProps) => {
  return (
    <Button type="submit" disabled={isDisabled} className={className}>
      {textButton}
    </Button>
  );
};

export default SubmitButton;
