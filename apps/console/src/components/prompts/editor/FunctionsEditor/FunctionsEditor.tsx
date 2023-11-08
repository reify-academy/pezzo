import { Button, Form, Input } from "antd";
import { FunctionEditorSchema } from "./types";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export function FunctionsEditor({ schema }: { schema: FunctionEditorSchema }) {
  return (
    <Form.List name={["functions"]}>
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((func, index) => (
              <FunctionForm
                key={func.key}
                index={index}
                canDelete={fields.length !== 1}
                onDelete={() => {
                  remove(index);
                }}
              />
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => {
                  add();
                }}
                style={{ width: "60%" }}
              >
                <PlusOutlined /> Add function
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
}

function FunctionForm({ canDelete = true, onDelete, index }) {
  return (
    <>
      <Form.Item
        validateTrigger={["onChange", "onBlur"]}
        name={["index", "name"]}
        rules={[
          {
            required: true,
            whitespace: true,
            message: "Please input function's name",
            pattern: /^\w+$/,
            max: 64,
          },
        ]}
      >
        <Input
          placeholder="The name of the function to be called. "
          style={{ width: "60%" }}
        />
      </Form.Item>
      <Form.Item
        name={["index", "description"]}
        validateTrigger={["onChange", "onBlur"]}
        rules={[
          {
            required: false,
            whitespace: true,
          },
        ]}
      >
        <Input
          placeholder="A description of what the function does"
          style={{ width: "60%" }}
        />
      </Form.Item>
      {canDelete ? (
        <MinusCircleOutlined
          className="dynamic-delete-button"
          style={{ margin: "0 8px" }}
          onClick={onDelete}
        />
      ) : null}
    </>
  );
}
