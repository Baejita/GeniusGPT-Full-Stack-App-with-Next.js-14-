import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";

export const dynamic = "force-dynamic";
const Tasks = () => {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};
export default Tasks;
