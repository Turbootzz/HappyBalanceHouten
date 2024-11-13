# HappyBalance Houten

This is a dutch business website for Ingrid Herman.

## Design

[Color Palatte](https://colorhunt.co/palette/e7ccccede8dca5b68dc1cfa1)

## Installation

Type the following command in both the Client and the Server folder:

```bash
npm i
```

Create an .env file in the Server folder and add the following:

```env
EMAIL_USER=
EMAIL_PASS=
EMAIL_RECEIVER=
```

In the Client folder, add a folder called config with config.js inside.
Add the following:

```javascript
const phone = "";
const email = "";

export { phone, email };
```
