<script setup>
import { Head, useForm } from "@inertiajs/vue3"
import {
  mdiLink,
  mdiPlus,
  mdiAlertBoxOutline,
  mdiArrowLeftBoldOutline
} from "@mdi/js"
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue"
import SectionMain from "@/Components/SectionMain.vue"
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue"
import BaseButton from "@/Components/BaseButton.vue"
import CardBox from "@/Components/CardBox.vue"
import BaseButtons from "@/Components/BaseButtons.vue"
import NotificationBar from "@/Components/NotificationBar.vue"
import CategoryItemList from "@/Components/Admin/CategoryItemList.vue"

const props = defineProps({
  items: {
    type: Object,
    default: () => ({}),
  },
  categoryType: {
    type: Object,
    default: () => ({}),
  },
  can: {
    type: Object,
    default: () => ({}),
  },
})

const formDelete = useForm({})

function destroy(id) {
  if (confirm("Are you sure you want to delete?")) {
    formDelete.delete(route("admin.category.type.item.destroy", {type: props.categoryType.id, item: id}))
  }
}

</script>

<template>
  <LayoutAuthenticated>
    <Head title="Product" />
    <SectionMain>
    gvfsdgdfgit add
    </SectionMain>
  </LayoutAuthenticated>
</template>
