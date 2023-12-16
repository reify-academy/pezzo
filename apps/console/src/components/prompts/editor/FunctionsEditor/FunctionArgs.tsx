import { Button, Form, Input, Select } from "@pezzo/ui";
import { OpenAIFunctionProperties } from "./types";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export function FunctionArgs({
  functionArgs,
}: {
  functionArgs: OpenAIFunctionProperties[];
}) {
  return (
    <h1>
      Function Args
    </h1>
    // <Form>
    //   <Form.List name="properties">
    //     {(fields, { add, remove }) => {
    //       return (
    //         <div>
    //           {fields.map((field, index) => (
    //             <Form.Item
    //               label={index === 0 ? "Properties" : ""}
    //               required={false}
    //               key={field.key}
    //             >
    //               <Form.Item
    //                 {...field}
    //                 validateTrigger={["onChange", "onBlur"]}
    //                 rules={[
    //                   {
    //                     required: true,
    //                     whitespace: true,
    //                     message:
    //                       "Please input property's name or delete this field.",
    //                   },
    //                 ]}
    //                 noStyle
    //               >
    //                 <Input
    //                   placeholder="property name"
    //                   style={{ width: "60%" }}
    //                 />
    //               </Form.Item>
    //               <Form.Item
    //                 {...field}
    //                 name={[field.name, "type"]}
    //                 rules={[
    //                   { required: true, message: "Please select a type" },
    //                 ]}
    //               >
    //                 <Select placeholder="Select a type">
    //                   <Select.Option value="string">String</Select.Option>
    //                   <Select.Option value="number">Number</Select.Option>
    //                   <Select.Option value="boolean">Boolean</Select.Option>
    //                 </Select>
    //               </Form.Item>
    //               {fields.length > 0 ? (
    //                 <MinusCircleOutlined
    //                   className="dynamic-delete-button"
    //                   style={{ margin: "0 8px" }}
    //                   onClick={() => {
    //                     remove(field.name);
    //                   }}
    //                 />
    //               ) : null}
    //             </Form.Item>
    //           ))}
    //           <Form.Item>
    //             <Button
    //               type="dashed"
    //               onClick={() => {
    //                 add();
    //               }}
    //               style={{ width: "60%" }}
    //             >
    //               <PlusOutlined /> Add property
    //             </Button>
    //           </Form.Item>
    //         </div>
    //       );
    //     }}
    //   </Form.List>
    // </Form>
  );
}
