import { z } from "zod";

const createPhoneSchema = z.object({
		cellPhone: z.string(),
		landLine: z.string(),
	}),
	phoneSchema = createPhoneSchema.extend({
		id: z.number(),
	});

const createAcademicSchema = z.object({
		institution: z.string(),
		degree: z.string(),
		lattes: z.string(),
	}),
	academicSchema = createAcademicSchema.extend({
		id: z.number(),
	});

const createAddressSchema = z.object({
		address: z.string(),
		district: z.string(),
		cep: z.string(),
		state: z.string(),
		city: z.string(),
	}),
	addressSchema = createAddressSchema.extend({
		id: z.number(),
	});

const createUserInfosSchema = z.object({
		name: z.string(),
		cpf: z.string(),
		birthDate: z.string(),
		phone: createPhoneSchema,
		academic: createAcademicSchema,
		address: createAddressSchema,
	}),
	userInfosSchema = createUserInfosSchema.extend({
		id: z.number(),
	});

export {
	createUserInfosSchema,
	createPhoneSchema,
	createAcademicSchema,
	createAddressSchema,
	phoneSchema,
	academicSchema,
	addressSchema,
	userInfosSchema,
};
