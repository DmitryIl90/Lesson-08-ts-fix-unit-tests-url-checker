import {calculatePasswordStrength} from "../src/Password";

describe("Calculate Password Strength tests", () => {

    test("Check for basic length requirement", () => {
        expect(calculatePasswordStrength("VESDV45")).toBe("Moderate");
        expect(calculatePasswordStrength("ASDASDQW")).toBe("Weak");
        expect(calculatePasswordStrength("QWEQWEQWE")).toBe("Moderate");
        expect(calculatePasswordStrength("ZXCZXCZXCZX")).toBe("Moderate");
        expect(calculatePasswordStrength("123451234512")).toBe("Strong");
        expect(calculatePasswordStrength("1234567890123")).toBe("Strong");
        expect(calculatePasswordStrength("AKSKDKFKGKFKDKS")).toBe("Strong");
    });
    test("Check for digits", () => {
        expect(calculatePasswordStrength("123456789")).toBe("Very Weak");
    });
    test("Check for lowercase letters", () => {
        expect(calculatePasswordStrength("asdfghjkl")).toBe("Very Weak");
        expect(calculatePasswordStrength("password")).toBe("Very Weak");
    });
    test("Check for uppercase letters", () => {
        expect(calculatePasswordStrength("ASDFGHJKL")).toBe("Very Weak");
    });
    test("Check for special characters", () => {
        expect(calculatePasswordStrength("h_Tmt-W/$!@t0")).toBe("Strong");
    });
    test("Determine password strength level based on strength score", () => {
        expect(calculatePasswordStrength("S")).toBe("Very Weak");
        expect(calculatePasswordStrength("3d")).toBe("Very Weak");
        expect(calculatePasswordStrength("KderYhUj")).toBe("Weak");
        expect(calculatePasswordStrength("Kdmxwei2")).toBe("Moderate");
        expect(calculatePasswordStrength("f2_fF#.6")).toBe("Strong");
        expect(calculatePasswordStrength("jk$5_fG#5.8kM")).toBe("Strong");
    });
});