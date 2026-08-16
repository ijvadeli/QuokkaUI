import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";

export default function Buttons() {
  return (
    <div>
      <Typography type="h1">Buttons</Typography>
      <Typography type="p">All button types organised by type and size. Buttons are still fully customizable using tailwind, these are just presets.</Typography>
      {/* Button Colors */}
      <Typography type="h2" className="my-4">Colors (variants)</Typography>
      <div className="border-2 rounded-2xl min-h-50 flex flex-row items-center justify-center gap-1 mx-4">
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
      <Typography type="h2" className="my-4">Sizes (size)</Typography>
      <div className="border-2 rounded-2xl min-h-50 flex flex-row items-center justify-center gap-1 mx-4">
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
