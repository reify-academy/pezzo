import zod from "zod";
export const OpenAIFunctionPropertiesSchema = zod.object({
  type: zod.union([
    zod.literal("string"),
    zod.literal("number"),
    zod.literal("boolean"),
    zod.literal("array"),
    zod.literal("object"),
  ]),
  /**
   * A description of what the parameter does, used by the model to choose when and how to call the function.
   */
  description: zod.string().optional(),
  /**
   * An array of possible values for the parameter. The model will only call the function with a value from this array.
   */
  enum: zod.array(zod.string()).optional(),
});

export const OpenAIFunctionParameterSchema = zod.object({
  type: zod.literal("object"),
  /**
   * Parameters the function accepts, described as a JSON Schema object. See the guide for examples, and the JSON Schema reference for documentation about the format.
   */
  properties: zod.record(OpenAIFunctionPropertiesSchema),
  required: zod.array(zod.string()),
});

export const OpenAIFunctionSchema = zod.object({
  /**
  /**
   * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
   */
  name: zod.string().regex(/^\w+$/).max(64),
  /**
   * A description of what the function does, used by the model to choose when and how to call the function.
   */
  description: zod.string().optional(),
  /**
   * The parameters the functions accepts, described as a JSON Schema object. See the [guide](https://platform.openai.com/docs/guides/gpt/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.
   *
   * To describe a function that accepts no parameters, provide the value {"type": "object", "properties": {}}.
   */
  parameters: zod.record(OpenAIFunctionParameterSchema),
});

export const ToolFunctionParameterSchema = zod.object({
  /**
   * The type of the tool. Currently, only function is supported.
   */
  type: zod.literal("function"),
  function: OpenAIFunctionSchema,
});

export const FunctionEditorSchema = zod.object({
  functions: zod.array(OpenAIFunctionSchema),
});

export type FunctionEditorSchemaType = zod.infer<typeof FunctionEditorSchema>;

export type OpenAIFunctionParameter = zod.infer<
  typeof OpenAIFunctionParameterSchema
>;

export type OpenAIFunctionProperties = zod.infer<
  typeof OpenAIFunctionPropertiesSchema
>;

export type OpenAIFunction = zod.infer<typeof OpenAIFunctionSchema>;
