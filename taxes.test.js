describe("calculateTaxes tests", function () {
	it("should caculate the high tax bracket", function () {
		expect(calculateTaxes(50000)).toEqual(12500);
		expect(calculateTaxes(100000)).toEqual(25000);
	});

	it("should caculate the low tax bracket", function () {
		expect(calculateTaxes(10000)).toEqual(1500);
		expect(calculateTaxes(1000)).toEqual(150);
		expect(calculateTaxes(0)).toEqual(0);
	});

	it("should throw Error if not valid income", function () {
		expect(() => calculateTaxes(!Number)).toThrowError();
		expect(() => calculateTaxes([])).toThrowError();
		expect(() => calculateTaxes(true)).toThrowError();
	});
});

describe("removeDupes tests", function () {
	it("should remove duplicates from array", function () {
		expect(removeDupes([1, 2, 2, 2, 3, 4, 5, 5, 6])).toEqual([
			1, 2, 3, 4, 5, 6,
		]);

		expect(removeDupes([1, 2, 2, 2, 3, 4, 5, 5, 6])).toBeInstanceOf(Array);
	});

	it("should remove duplicates from string", function () {
		expect(removeDupes("hello")).toBe("helo");
		expect(removeDupes("hello")).toBeInstanceOf(String);
	});
});

describe("remove tests", function () {
	it("should remove value from array", function () {
		expect(remove([1, 2, 3, 4, 5, 6], 6)).not.toContain(6);
	});
});

describe("submitForm() tests", () => {
	it("saves input value to username array", () => {
		input.value = "chickenShit";
		submitForm();
		expect(usernames.length).toBe(1);
		expect(usernames).toContain("chickenShit");
	});

	it("saves long usernames", () => {
		input.value = " I LUV BUTT HOLES 69";
		submitForm();
		expect(usernames.length).toBe(1);
	});
});

afterEach(function () {
	input.value = "";
	usernames = [];
});
