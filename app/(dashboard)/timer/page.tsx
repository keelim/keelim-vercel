import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import CustomTimer from '@/components/ui/timer';

export default function TimerPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Timer</CardTitle>
        <CardDescription>This is Timer</CardDescription>
      </CardHeader>
      <CardContent>
        <CustomTimer></CustomTimer>
      </CardContent>
    </Card>
  );
}
