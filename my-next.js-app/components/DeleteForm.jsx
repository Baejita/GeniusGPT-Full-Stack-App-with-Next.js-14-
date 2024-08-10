"use client";
import { deleteTask } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";

const Deletebtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-error btn-xs text-white"
      disabled={pending}
    >
      {pending ? "please wait ..." : "Delete"}
    </button>
  );
};

const initialState = {
  message: null,
};

const DeleteForm = ({ id }) => {
  const [state, formAction] = useFormState(deleteTask, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("there was an error");
    }

    if (state.message === "success") {
      toast.success("Delete was successfully");
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <Deletebtn />
    </form>
  );
};
export default DeleteForm;
