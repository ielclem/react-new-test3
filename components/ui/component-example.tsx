import { Button } from "@/components/ui/button"

export function ComponentExample() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Component Example</h1>

      <Button>Click me</Button>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border p-4 shadow">
          Card Example
        </div>
        <div className="rounded-xl border p-4 shadow">
          Another Card
        </div>
      </div>
    </div>
  )
}