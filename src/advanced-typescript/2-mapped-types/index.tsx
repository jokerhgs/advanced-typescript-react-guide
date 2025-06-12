// 1. Mapped Types – Transform Props for Preview Mode
// Objective:
// Design a utility type that takes a component's props and transforms all of them into optional properties. This simulates a “preview” or “read-only” mode where the consumer of the component doesn’t need to provide the full configuration.

// Instructions:

// Begin with an existing component's prop type definition.

type CardProps = {
  children: React.ReactNode;
  className: string;
  variant: "default" | "danger";
};

const CardVariants: Record<string, string> = {
  default: "bg-gray-500",
  danger: "bg-red-500",
};

const Card = ({ children, className, variant }: CardProps) => {
  return (
    <button className={`${className} + ${CardVariants[variant]}`}>
      {children}
    </button>
  );
};

// Create a separate utility type that accepts this prop type as a generic.

// Use a mapped type construct to iterate over each property in the original type.

// Modify the resulting type so that all keys become optional, without altering the original type.

// Apply this transformed type to a variant of your component (e.g., PreviewCard) to allow for partial configuration.

type PreviewCardProps<T> = Partial<T>;

const PreviewCard = ({
  children = "Preview",
  className = "",
  variant = "default",
}: PreviewCardProps<CardProps>) => {
  return (
    <button className={`${className} ${CardVariants[variant]}`}>
      {children}
    </button>
  );
};

export default function MappedTypesPage() {
  return (
    <>
      <Card className="p-4" variant="default">
        {"test"}
      </Card>
      <PreviewCard>{}</PreviewCard>
    </>
  );
}
