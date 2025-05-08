import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function Page() {
  const data = await fetch("http://localhost:5016/Users");
  const weather = await data.json();
  return (
    <div className="grid grid-cols-4">
      <Card>
        <CardContent className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold">Team Members</h3>
            <p className="text-muted-foreground">
              Invite your team members to collaborate.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {weather.map((item) => (
              <li key={item.id}>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarImage src={item.image}></AvatarImage>
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <div className="text-md">{item.name}</div>
                      <div className="text-muted-foreground">{item.email}</div>
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select a fruit"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
