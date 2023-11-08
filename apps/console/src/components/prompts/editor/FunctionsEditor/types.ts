export interface FunctionEditorSchema {
  functions: OpenAIFunction[];
}
interface OpenAIFunctionParameter {
  type: "object";
  /**
   * Parameters the function accepts, described as a JSON Schema object. See the guide for examples, and the JSON Schema reference for documentation about the format.
   */
  properties?: Record<string, OpenAIFunctionProperties>;
  required: string[];
}
export interface OpenAIFunctionProperties {
  type: "string" | "number" | "boolean" | "array" | "object";
  description?: string;
  enum?: string[];
}

interface OpenAIFunction {
  /**
   * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
   */
  name: string;
  /**
   * A description of what the function does, used by the model to choose when and how to call the function.
   */
  description?: string;
  /**
   * The parameters the functions accepts, described as a JSON Schema object. See the [guide](https://platform.openai.com/docs/guides/gpt/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.
   *
   * To describe a function that accepts no parameters, provide the value {"type": "object", "properties": {}}.
   */
  parameters: OpenAIFunctionParameter[];
}
