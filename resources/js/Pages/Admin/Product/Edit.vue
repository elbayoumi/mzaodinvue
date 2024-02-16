<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3"
import {
    mdiAccountKey,
    mdiArrowLeftBoldOutline,
    mdiArrowBottomRightThick
} from "@mdi/js"
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue"
import SectionMain from "@/Components/SectionMain.vue"
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue"
import CardBox from "@/Components/CardBox.vue"
import FormField from '@/Components/FormField.vue'
import FormControl from '@/Components/FormControl.vue'
import BaseButton from '@/Components/BaseButton.vue'
import BaseButtons from '@/Components/BaseButtons.vue'

const props = defineProps({
    product: {
        type: Object,
        default: () => ({}),
    },
})
let images = props.product.image_product;

const form = useForm({
    _method: 'put',
    //   name: props.product.name,
    name_arabic: props.product.name_arabic,
    name_english: props.product.name_english,
    sku: props.product.sku,
    weight: props.product.weight,
    payment_deadline_minutes: props.product.payment_deadline_minutes,
    cost_price: props.product.cost_price,
    estimated_market_price: props.product.estimated_market_price,
    auction_duration_minutes: props.product.auction_duration_minutes,
    registration_amount: props.product.registration_amount,
    required_bidders: props.product.required_bidders,
    opening_bid_amount: props.product.opening_bid_amount,
    product_details: props.product.product_details,
    auction_start: convertToDate(props.product.auction_start),
    auction_end: convertToDate(props.product.auction_end),
})
function convertToDate(dateString) {
    if (!dateString) return null;

    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let day = date.getDate();
    if (day < 10) day = '0' + day;

    return `${year}-${month}-${day}`;
}


// console.log('immmm',props.product.image_product);
</script>

<template>
    <LayoutAuthenticated>

        <Head title="Update product" />
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiAccountKey" title="Update product" main>
                <BaseButton :route-name="route('admin.product.index')" :icon="mdiArrowLeftBoldOutline" label="Back"
                    color="white" rounded-full small />
            </SectionTitleLineWithButton>
            <CardBox form @submit.prevent="form.post(route('admin.product.update', props.product.id))">

                <FormField class="image-container">
                    <BaseButton label="Image Edit" class="w-28 h-10" :route-name="route('admin.dashboard')"
                        :icon="mdiArrowBottomRightThick" />

                    <div v-for="image in images" :key="image.id" class="px-3 py-2 max-w-full focus:ring focus:outline-none rounded w-full',
    'dark:placeholder-gray-400 ">
                        <div class=" w-44 relative">
                            <span class="absolute inset-x-1/2">{{ image.rank }}</span>
                            <img class="image block w-full" :src="image.img" :alt="image.alt">
                        </div>

                    </div>
                </FormField>

                <FormField label="Name Arabic" :class="{ 'text-red-400': form.errors.name_arabic }">
                    <FormControl v-model="form.name_arabic" type="text" placeholder="Enter Name Arabic"
                        :error="form.errors.name_arabic">
                        <div class="text-red-400 text-sm" v-if="form.errors.name_arabic">
                            {{ form.errors.name_arabic }}
                        </div>
                    </FormControl>
                </FormField>

                <FormField label="Name English" :class="{ 'text-red-400': form.errors.name_english }">
                    <FormControl v-model="form.name_english" type="text" placeholder="Enter Name English"
                        :error="form.errors.name">
                        <div class="text-red-400 text-sm" v-if="form.errors.name_english">
                            {{ form.errors.name_english }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="sku" :class="{ 'text-red-400': form.errors.sku }">
                    <FormControl v-model="form.sku" type="text" placeholder="Enter sku" :error="form.errors.sku">
                        <div class="text-red-400 text-sm" v-if="form.errors.sku">
                            {{ form.errors.sku }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="Weight" :class="{ 'text-red-400': form.errors.weight }">
                    <FormControl v-model="form.weight" type="number" step="0.01" placeholder="Enter Weight"
                        :error="form.errors.weight">
                        <div class="text-red-400 text-sm" v-if="form.errors.weight">
                            {{ form.errors.weight }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="payment deadline minutes"
                    :class="{ 'text-red-400': form.errors.payment_deadline_minutes }">
                    <FormControl v-model="form.payment_deadline_minutes" type="number" step="0.01"
                        placeholder="Enter payment deadline minutes" :error="form.errors.payment_deadline_minutes">
                        <div class="text-red-400 text-sm" v-if="form.errors.payment_deadline_minutes">
                            {{ form.errors.payment_deadline_minutes }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="cost price" :class="{ 'text-red-400': form.errors.cost_price }">
                    <FormControl v-model="form.cost_price" type="number" step="0.01" placeholder="Enter cost price"
                        :error="form.errors.cost_price">
                        <div class="text-red-400 text-sm" v-if="form.errors.cost_price">
                            {{ form.errors.cost_price }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="estimated market price" :class="{ 'text-red-400': form.errors.estimated_market_price }">
                    <FormControl v-model="form.estimated_market_price" type="number" step="0.01"
                        placeholder="Enter estimated market price" :error="form.errors.estimated_market_price">
                        <div class="text-red-400 text-sm" v-if="form.errors.estimated_market_price">
                            {{ form.errors.estimated_market_price }}
                        </div>
                    </FormControl>
                </FormField>

                <FormField label="auction duration minutes"
                    :class="{ 'text-red-400': form.errors.auction_duration_minutes }">
                    <FormControl v-model="form.auction_duration_minutes" type="number"
                        placeholder="Enter auction  duration minutes" :error="form.errors.auction_duration_minutes">
                        <div class="text-red-400 text-sm" v-if="form.errors.auction_duration_minutes">
                            {{ form.errors.weight }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="registration amount" :class="{ 'text-red-400': form.errors.registration_amount }">
                    <FormControl v-model="form.registration_amount" type="number" step="0.01"
                        placeholder="Enter registration amount" :error="form.errors.registration_amount">
                        <div class="text-red-400 text-sm" v-if="form.errors.registration_amount">
                            {{ form.errors.registration_amount }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="required bidders" :class="{ 'text-red-400': form.errors.required_bidders }">
                    <FormControl v-model="form.required_bidders" type="number" step="0.01"
                        placeholder="Enter required bidders" :error="form.errors.required_bidders">
                        <div class="text-red-400 text-sm" v-if="form.errors.required_bidders">
                            {{ form.errors.required_bidders }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="opening bid amount" :class="{ 'text-red-400': form.errors.opening_bid_amount }">
                    <FormControl v-model="form.opening_bid_amount" type="number" step="0.01"
                        placeholder="Enter opening bid amount" :error="form.errors.opening_bid_amount">
                        <div class="text-red-400 text-sm" v-if="form.errors.opening_bid_amount">
                            {{ form.errors.opening_bid_amount }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="Details" :class="{ 'text-red-400': form.errors.product_details }">
                    <FormControl v-model="form.product_details" type="textarea" placeholder="Enter  Details"
                        :error="form.errors.product_details">
                        <div class="text-red-400 text-sm" v-if="form.errors.product_details">
                            {{ form.errors.product_details }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="auction start" :class="{ 'text-red-400': form.errors.auction_start }">
                    <FormControl v-model="form.auction_start" type="date" step="0.01" placeholder="Enter auction start"
                        :error="form.errors.auction_start">
                        <div class="text-red-400 text-sm" v-if="form.errors.auction_start">
                            {{ form.errors.auction_start }}
                        </div>
                    </FormControl>
                </FormField>
                <FormField label="auction end" :class="{ 'text-red-400': form.errors.auction_end }">
                    <FormControl v-model="form.auction_end" type="date" step="0.01" placeholder="Enter auction end"
                        :error="form.errors.auction_end">
                        <div class="text-red-400 text-sm" v-if="form.errors.auction_end">
                            {{ form.errors.auction_end }}
                        </div>
                    </FormControl>
                </FormField>
                <template #footer>
                    <BaseButtons>
                        <BaseButton type="submit" color="info" label="Submit" :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing" />
                    </BaseButtons>
                </template>
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
