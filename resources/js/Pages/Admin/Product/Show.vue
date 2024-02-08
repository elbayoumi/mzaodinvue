<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3"
import {
    mdiAccountKey,
    mdiArrowLeftBoldOutline,
    mdiAccessPointOff,
    mdiAccessPoint,
    mdiEyeOff,
    mdiEyeSettings
} from "@mdi/js"
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue"
import SectionMain from "@/Components/SectionMain.vue"
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue"
import CardBox from "@/Components/CardBox.vue"
import BaseButton from "@/Components/BaseButton.vue"

const props = defineProps({
    permission: {
        type: Object,
        default: () => ({}),
    },
})
function destroy(id) {
    if (confirm("Are you sure you want to delete?")) {
        formDelete.delete(route("admin.permission.destroy", id))
    }
}
</script>

<template>
    <LayoutAuthenticated>

        <Head title="View product" />
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiAccountKey" title="View product" main>
                <BaseButton :route-name="route('admin.product.index')" :icon="mdiArrowLeftBoldOutline" label="Back"
                    color="white" rounded-full small />
            </SectionTitleLineWithButton>
            <CardBox class="mb-6">
                <table>
                    <tbody>
                        <tr>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                Name Arabic
                            </td>

                            <td data-label="Name Arabic">
                                {{ permission.name_arabic }}
                            </td>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                Name English
                            </td>

                            <td data-label="Name English">
                                {{ permission.name_english }}
                            </td>

                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                Product Details
                            </td>

                            <td data-label="Product Details">
                                {{ permission.product_details }}
                            </td>
                            <!-- // -->

                        </tr>
                        <tr>
                            <!-- // -->

                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                sku
                            </td>

                            <td data-label="sku">
                                {{ permission.sku }}
                            </td>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                weight
                            </td>

                            <td data-label="weight">
                                {{ permission.weight }}
                            </td>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                estimated market price
                            </td>

                            <td data-label="estimated market price">
                                {{ permission.estimated_market_price }}
                            </td>
                            <!-- // -->

                        </tr>
                        <tr>
                            <!-- // -->

                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                cost price
                            </td>

                            <td data-label="cost price">
                                {{ permission.cost_price }}
                            </td>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                required bidders
                            </td>

                            <td data-label="required bidders">
                                {{ permission.required_bidders }}
                            </td>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                registration amount
                            </td>

                            <td data-label="registration amount">
                                {{ permission.registration_amount }}
                            </td>
                            <!-- // -->

                        </tr>
                        <tr>
                            <!-- // -->

                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                auction duration minutes
                            </td>

                            <td data-label="auction duration minutes">
                                {{ permission.auction_duration_minutes }}
                            </td>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                opening bid amount
                            </td>

                            <td data-label="opening bid amount">
                                {{ permission.opening_bid_amount }}
                            </td>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                payment deadline minutes
                            </td>

                            <td data-label="payment deadline minutes">
                                {{ permission.payment_deadline_minutes }}
                            </td>
                            <!-- // -->

                        </tr>
                        <tr>
                            <!-- // -->

                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                is active
                            </td>

                            <td data-label="is active">
                                <BaseButton v-if="!permission.is_active" color="danger" :icon="mdiAccessPointOff" small
                                    @click="destroy(permission.id)" />
                                <BaseButton v-if="permission.is_active" color="success" :icon="mdiAccessPoint" small
                                    @click="destroy(permission.id)" />
                            </td>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                is visible
                            </td>

                            <td data-label="is visible">
                                <BaseButton v-if="!permission.is_visible" color="danger" :icon="mdiEyeOff" small
                                    @click="destroy(permission.id)" />
                                <BaseButton v-if="permission.is_visible" color="success" :icon="mdiEyeSettings" small
                                    @click="destroy(permission.id)" />
                            </td>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                Created
                            </td>
                            <td data-label="Created">
                                {{ new Date(permission.created_at).toLocaleString() }}
                            </td>
                            <!-- // -->

                        </tr>
                        <tr>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                auction start
                            </td>

                            <td data-label="auction start">
                                {{ permission.auction_start }}
                            </td>
                            <!-- // -->
                            <td class="
                  p-4
                  pl-8
                  text-slate-500
                  dark:text-slate-400
                  hidden
                  lg:block
                ">
                                auction end
                            </td>

                            <td data-label="auction end">
                                {{ permission.auction_end }}
                            </td>
                        </tr>
                        <tr>


                        </tr>
                    </tbody>
                </table>
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
