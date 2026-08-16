import { Button } from "./ui/Button";

export default function Buttons() {
  return (
    <div>
      <h1 className="text-4xl font-medium">Buttons</h1>
      <p>All button types organised by type and size. Buttons are still fully customizable using tailwind, these are just presets.</p>
      {/* Button Colors */}
      <h2 className="text-3xl font-medium mt-4">Colors (variants)</h2>
      <div className="bg-gray-100 rounded-2xl h-50 flex flex-row items-center justify-center gap-1 mt-4 mx-4">
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
      <h2 className="text-3xl font-medium mt-4">Sizes (size)</h2>
      <div className="bg-gray-100 rounded-2xl h-50 flex flex-row items-center justify-center gap-1 mt-4 mx-4">
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
