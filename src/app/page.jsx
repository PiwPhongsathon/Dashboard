
import AppBarChart from "@/components/AppBarChart";
import AppBarChart1 from "@/components/AppBarChart1";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <Card className={"gap-1"}>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl font-bold">$450,000</h3>
          <h5 className="text-xs text-muted-foreground">+20.1% from last month</h5>
        </CardContent>
      </Card>
      <Card className={"gap-1"}>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl font-bold">$450,000</h3>
          <h5 className="text-xs text-muted-foreground">+20.1% from last month</h5>
        </CardContent>
      </Card>
      <Card className={"gap-1"}>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl font-bold">$450,000</h3>
          <h5 className="text-xs text-muted-foreground">+20.1% from last month</h5>
        </CardContent>
      </Card>
      <Card className={"gap-1"}>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl font-bold">$450,000</h3>
          <h5 className="text-xs text-muted-foreground">+20.1% from last month</h5>
        </CardContent>
      </Card>
      <Card className={"xl:col-span-2"}>
        <CardHeader>
          <CardTitle>Bar - chart</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
          <CardContent className={"p-0"}>
            <AppBarChart />
          </CardContent>
        </CardHeader>
      </Card>
      <AppBarChart1 /> 
    </div>

  );
}
