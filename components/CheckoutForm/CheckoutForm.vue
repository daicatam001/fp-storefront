<template>
    <div class="">
        <CollectionHeading class="mb-8"> Billing information </CollectionHeading>
        <form id="billing-info-form"
            @submit.prevent="onSubmit">
            <div class="grid grid-cols-2 gap-4 max-w-[600px]">
                <div>
                    <label for="">First name <span class="text-red-500">*</span></label>
                    <InputText class="w-full"
                        v-model="firstName"
                        v-bind="firstAttrs"
                        :pt="inputtext"></InputText>
                    <small class="text-red-500"
                        v-if="meta.touched && errors.firstName">{{ errors.firstName }}</small>
                </div>
                <div>
                    <label for="">Last name <span class="text-red-500">*</span></label>
                    <InputText class="w-full"
                        v-model="lastName"
                        v-bind="lastAttrs"
                        :pt="inputtext"></InputText>
                    <small class="text-red-500"
                        v-if="meta.touched && errors.lastName">{{ errors.lastName }}</small>
                </div>
                <div class="col-span-full">
                    <label for="">Email <span class="text-red-500">*</span></label>
                    <InputText class="w-full"
                        v-model="email"
                        v-bind="emailAttrs"
                        :pt="inputtext"></InputText>
                    <small class="text-red-500"
                        v-if="meta.touched && errors.email">{{ errors.email }}</small>
                </div>
                <div class="col-span-full">
                    <label for="">Billing note</label>
                    <Textarea class="w-full"
                        :pt="inputtext"></Textarea>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import { inputtext } from '~/core/primevue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
const { defineField, handleSubmit, meta, errors } = useForm({
    validationSchema: yup.object({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Email is invalid format').required('Email is required'),
    })
});
const [firstName, firstAttrs] = defineField('firstName');
const [lastName, lastAttrs] = defineField('lastName');
const [email, emailAttrs] = defineField('email');

const { completeCart } = useCart()

const onSubmit = handleSubmit(async (values) => {
    completeCart(values)
});
</script>