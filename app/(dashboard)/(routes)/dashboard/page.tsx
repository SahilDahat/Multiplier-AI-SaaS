import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
//https://nextjs.org/docs/app/building-your-application/routing/route-groups

export default function DashboardPage() {
  return (
    <div>
      <Button>Click Me!</Button>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
