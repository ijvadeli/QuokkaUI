import { Typography } from "./ui/Typography";

export default function TypographyShowcase() {
  return (
    <div className="m-8">
      <Typography type="h1">
        Typography
      </Typography>
      <Typography type="p" className="py-4">
        Predefined font-sizes to create a clear visual order for the user. Also
        made responsive for mobile.
      </Typography>
      <Typography type="h1">Heading 1</Typography>
      <Typography type="h2">Heading 2</Typography>
      <Typography type="h3">Heading 3</Typography>
      <Typography type="h4">Heading 4</Typography>
      <Typography type="h5">Heading 5</Typography>
      <Typography type="h6">Heading 6</Typography>
      <Typography type="p">Paragraph text</Typography>
    </div>
  );
}
