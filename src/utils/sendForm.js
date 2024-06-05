export async function handleSubmit(event, setShowMessage) {
  event.preventDefault();
  const formData = new FormData(event.target);

  // "47c7550f-7aeb-4528-ad74-9b5fb146ac39"
  formData.append("access_key", "47c7550f-7aeb-4528-ad74-9b5fb146ac39");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  console.log(json);
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
    setShowMessage(true);
    event.target.reset();
  }
}
