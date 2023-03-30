import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().defined().required(),
    nickName: yup.string().default("").nullable(),
    sex: yup.mixed().oneOf(["male", "female", "other"]).defined(),
    email: yup.string().email().required(),
    birthDate: yup.date().nullable().min(new Date(1900, 0, 1)),
  })
  .required();

describe("BigForm Component", () => {
  describe("Throws error", () => {
    it("if data is missing", async () => {
      expect(await schema.isValid({ name: "" })).toBeFalsy;
    });

    it("if data type is not correct", async () => {
      const wrongUser = {
        name: "Alejo Rojas",
        nickname: "Alejo",
        sex: 234,
        email: "alejo@digital.com",
      };
      expect(await schema.isValid(wrongUser)).toBeFalsy;
    });
  }),
    describe("Validates correctly", () => {
      it("with valid user", async () => {
        const rightUser = {
          name: "Alejo Rojas",
          nickname: "Alejo",
          sex: "male",
          email: "alejo@digital.com",
        };
        expect(await schema.isValid(rightUser)).toBeTruthy;
      });
    });
});
