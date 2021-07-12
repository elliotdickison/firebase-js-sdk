<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/auth](./auth.md) &gt; [linkWithPopup](./auth.linkwithpopup.md)

## linkWithPopup() function

Links the authenticated provider to the user account using a pop-up based OAuth flow.

<b>Signature:</b>

```typescript
export declare function linkWithPopup(user: User, provider: AuthProvider, resolver?: PopupRedirectResolver): Promise<UserCredential>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  user | [User](./auth.user.md) | The user. |
|  provider | [AuthProvider](./auth.authprovider.md) | The provider to authenticate. The provider has to be an [OAuthProvider](./auth.oauthprovider.md)<!-- -->. Non-OAuth providers like [EmailAuthProvider](./auth.emailauthprovider.md) will throw an error. |
|  resolver | [PopupRedirectResolver](./auth.popupredirectresolver.md) | An instance of [PopupRedirectResolver](./auth.popupredirectresolver.md)<!-- -->, optional if already supplied to [initializeAuth()](./auth.initializeauth.md) or provided by [getAuth()](./auth.getauth.md)<!-- -->. |

<b>Returns:</b>

Promise&lt;[UserCredential](./auth.usercredential.md)<!-- -->&gt;

## Remarks

If the linking is successful, the returned result will contain the user and the provider's credential.

## Example


```javascript
// Sign in using some other provider.
const result = await signInWithEmailAndPassword(auth, email, password);
// Link using a popup.
const provider = new FacebookAuthProvider();
await linkWithPopup(result.user, provider);

```
