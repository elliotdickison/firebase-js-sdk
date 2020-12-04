<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/firestore](./firestore.md) &gt; [lite](./firestore_lite.md) &gt; [QueryDocumentSnapshot](./firestore_lite.querydocumentsnapshot.md)

## QueryDocumentSnapshot class

A `QueryDocumentSnapshot` contains data read from a document in your Firestore database as part of a query. The document is guaranteed to exist and its data can be extracted with `.data()` or `.get(<field>)` to get a specific field.

A `QueryDocumentSnapshot` offers the same API surface as a `DocumentSnapshot`<!-- -->. Since query results contain only existing documents, the `exists` property will always be true and `data()` will never return 'undefined'.

<b>Signature:</b>

```typescript
export declare class QueryDocumentSnapshot<T = DocumentData> extends DocumentSnapshot<T> 
```
<b>Extends:</b> [DocumentSnapshot](./firestore_lite.documentsnapshot.md)<!-- -->&lt;T&gt;

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [data()](./firestore_lite.querydocumentsnapshot.data.md) |  | Retrieves all fields in the document as an <code>Object</code>. |
