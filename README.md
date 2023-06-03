`import { cookies } from "next/headers"`

If your function for obtaining cookies is not inside the app directory, when set-cookie is used, other cookies will be discarded.

Create a new cookie named "cookie1" manually in the console with any value, and then refresh this page.