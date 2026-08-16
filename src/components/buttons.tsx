import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";

export default function Buttons() {
  return (
    <div className="m-8 mt-30 sm:mt-20">
      <Typography type="h1">Buttons</Typography>
      <Typography type="p" className="py-4">Buttons are still fully customizable using tailwind.</Typography>
      {/* Button Colors */}
      <Typography type="h2" className="my-4">Variant</Typography>
      <div className="border-2 rounded-2xl min-h-50 flex flex-row items-center justify-center gap-1">
        <div className="text-center">
          <Button variant="default">Default</Button>
          <Button variant="neutral">Neutral</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="info">Info</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
        </div>
      </div>
      {/* Button Sizes */}
      <Typography type="h2" className="my-4">Size</Typography>
      <div className="border-2 rounded-2xl min-h-50 flex flex-row items-center justify-center gap-1">
        <div className="text-center">
          <Button size='xs'>Extra small</Button>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
          <Button size='xl'>Extra large</Button>
        </div>
      </div>
    </div>
  );
}
