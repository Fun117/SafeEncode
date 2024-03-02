# SafeEncode

SafeEncode is a tool designed for encoding and decoding data with a focus on security and privacy. It aims to securely convert sensitive data, such as confidential information and personal data, into a safe format for storage and transmission. This tool can be used for various secure data processing tasks, including secure communication and storage in databases.

# Links

- [Documentation](https://safe-encode.vercel.app/docs)
- [API Reference](https://safe-encode.vercel.app/docs/api-reference)
- [Privacy Policy](https://safe-encode.vercel.app/docs/privacy-policy)

# Language
- English
- [日本語](https://github.com/Fun117/SafeEncode/blob/main/README/ja.md)

---

# Contributing to the Docs

Contributing to the documentation is simple and easy. To contribute to the documentation, please visit the official repository.

# Learn how to get started with SafeEncode!

> [!NOTE]
> To decrypt encrypted content, you must use the same key that was used for encryption. Attempting decryption with a different key may result in the content not being decrypted correctly. Please ensure you use the correct key for decryption.

# API Reference
- [Encrypt Endpoint](#encrypt-endpoint)
- [Decryption Endpoint](#decryption-endpoint)

## Encrypt Endpoint

This endpoint is used to encrypt content using a provided key.

### Endpoint

```
GET /api/generation
```

### Parameters

`key` (required): The encryption key.

`content` (required): The content to be encrypted.

### Response

`content` : The encrypted content.

### Errors

400 Bad Request: If any of the required parameters are missing or invalid.

### Example

Request

```js
fetch('http://safe-encode.vercel.app/api/generation?key=<KEY>&content=<CONTENT>')
	.then(response => response.json())
	.then(data => {
		console.log(data.content);
		if (!data.error) {
			// Handle successful response here
		}
	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});
```

## Decryption Endpoint

This endpoint is used to decrypt content using a provided key.

### Endpoint

```
GET /api/generation
```

### Parameters

`key` (required): The decryption key.

`content` (required): The content to be decrypted.

### Response

`content` : The decrypted content.

### Errors

400 Bad Request: If any of the required parameters are missing or invalid.

### Example

Request

```js
fetch('http://safe-encode.vercel.app/api/decryption?key=<KEY>&content=<CONTENT>')
	.then(response => response.json())
	.then(data => {
		console.log(data.content);
		if (!data.error) {
			// Handle successful response here
		}
	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});
```

---

# Privacy Policy

## Operator Information

This feature is operated and developed by an individual (Fun117).

## Information Collected

When using this service, information is collected only when making API requests. The collected information is used to track the usage frequency of the API. However, individual details such as URLs or their content are not collected.

## Contact Information

If you have any questions or concerns, please feel free to contact us at the following email address:

- Operator Name: Fun117

## Notification of Changes

This privacy policy may be updated periodically. Any changes will be notified on this page. Please check back regularly for updates.