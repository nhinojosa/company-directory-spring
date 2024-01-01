<script setup>
import { faker } from '@faker-js/faker'

const firstname = faker.person.firstName();
const lastname = faker.person.lastName();
const fullname = `${firstname} ${lastname}`
const title = faker.person.jobTitle();
const bio = faker.lorem.lines(2);
</script>

<template>
    <div class="border border-gray-400 rounded-lg shadow bg-gray-200">

        <img class="rounded-t-xl" :src="faker.image.urlLoremFlickr({ category: 'cat' })" />
        <div class="p-4">
            <p class="mb-2 text-2xl font-bold">{{ fullname }}</p>
            <p class="mb-3 font-normal text-gray-700">{{ title }}</p>
            <p class="mb-3 font-normal text-gray-700">{{ bio }}</p>
        </div>
    </div>
</template>