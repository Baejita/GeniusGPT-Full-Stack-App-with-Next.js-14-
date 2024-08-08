import { editTask } from "@/utils/actions";

function EditForm({ task }) {
  const { id, completed, content } = task;

  return (
    <div>
      <form
        action={editTask}
        className="max-w-sm border border-base-300 rounded-lg p-12"
      >
        <input type="hidden" name="id" value={id} />
        {/*content */}
        <input
          type="text"
          name="content"
          defaultValue={content}
          required
          className=" input input-bordered w-full"
        />

        {/* completed */}
        <div className="form-control my-4">
          <label className="label cursor-pointer">
            <span className="label-text">Completed</span>
            <input
              type="checkbox"
              defaultChecked={completed}
              name="completed"
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>
        </div>
        <button className="btn btn-primary btn-block btn-sm">edit</button>
      </form>
    </div>
  );
}

export default EditForm;
