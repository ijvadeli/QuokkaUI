import { Button } from "./ui/Button";

export default function Buttons() {
  return (
    <div>
      <h1 className="text-4xl font-medium">Button Types</h1>
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
    </div>
  );
}
