import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
} from "@pezzo/ui";
import { useEditorContext } from "~/lib/providers/EditorContext";
import TextArea from "antd/es/input/TextArea";
import { PlusIcon, TrashIcon } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { useState } from "react";

export function FunctionsEditor() {
  const { toolsArray: functionsArray } = useEditorContext();
  const { fields, append, remove } = functionsArray;
  const handleAdd = () => {
    append({
      name: "",
      description: "",
      tools: [],
    });

    // trackEvent("prompt_chat_completion_message_created", {
    //   promptId,
    // });
  };

  return (
    <div className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <FunctionForm
          key={field.id}
          index={index}
          canDelete={fields.length !== 0}
          onDelete={() => remove(index)}
        />
      ))}
      <div className="flex items-center justify-center">
        <Button className="border-dashed" variant="outline" onClick={handleAdd}>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add function
        </Button>
      </div>
    </div>
  );
}

function FunctionForm({ canDelete = true, onDelete, index }) {
  const { getForm } = useEditorContext();
  const form = getForm();
  // Get the properties of the current function
  const initialProps =
    form.getValues(`content.tools.${index}.function.parameters.properties`) ||
    {};

  // const initialPropsAsArr = Object.keys(initialProps).reduce((acc, key) => {
  //   acc.push({ name: key, value: initialProps[key] });
  //   return acc;
  // }, []);
  // const [properties, setProperties] = useState(initialPropsAsArr);
  const { append, remove } = useFieldArray({
    control: form.control,
    name: `content.tools.${index}.function.parameters.properties`,
  });

  return (
    <>
      <FormField
        control={form.control}
        name={`content.tools.${index}.function.name`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                autoComplete="off"
                {...field}
                placeholder="The name of the function to be called. "
                style={{ width: "60%" }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`content.tools.${index}.function.description`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <TextArea
                {...field}
                placeholder="A description of the function. "
                style={{ width: "60%" }}
              />
            </FormControl>
          </FormItem>
        )}
      />
      {properties.map((prop) => (
        <FormField
          control={form.control}
          name={`content.tools.${index}.function.parameters.properties.${prop}`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoComplete="off"
                  {...field}
                  placeholder="The name of the property."
                  style={{ width: "60%" }}
                />
              </FormControl>
            </FormItem>
          )}
        />
      ))}
      <Button
        onClick={() => {
          // Add a new property to the form values
          const newProperties = { ...initialProps, newProperty: {} };
          form.setValue(
            `content.tools.${index}.function.parameters.properties`,
            newProperties
          );
        }}
      >
        Add Property
      </Button>

      {canDelete ? (
        <TrashIcon style={{ margin: "0 8px" }} onClick={onDelete} />
      ) : null}
    </>
  );
}
