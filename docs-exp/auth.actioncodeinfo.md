<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/auth](./auth.md) &gt; [ActionCodeInfo](./auth.actioncodeinfo.md)

## ActionCodeInfo interface

A response from [checkActionCode()](./auth.checkactioncode.md)<!-- -->.

<b>Signature:</b>

```typescript
export interface ActionCodeInfo 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [data](./auth.actioncodeinfo.data.md) | { email?: string \| null; multiFactorInfo?: [MultiFactorInfo](./auth.multifactorinfo.md) \| null; previousEmail?: string \| null; } | The data associated with the action code. |
|  [operation](./auth.actioncodeinfo.operation.md) | [ActionCodeOperation](./auth.actioncodeoperation.md) | The type of operation that generated the action code. |
