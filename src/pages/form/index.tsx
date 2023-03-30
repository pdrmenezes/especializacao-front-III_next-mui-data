import FormComponent from "@/components/Form";

export default function Form() {
  function onSubmitUserRegister() {
    alert("OK");
  }
  return (
    <main style={{ padding: 30 }}>
      <FormComponent onSubmit={onSubmitUserRegister} />
    </main>
  );
}
