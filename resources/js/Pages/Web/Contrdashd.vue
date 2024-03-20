<template>
    <Layout>
        <div class="contrdash px-8 py-24">
            <div class="container mx-auto">
                <div
                    class="bg-white cardas relative rounded-md overflow-hidden shadow-md border-2 border-black p-2 w-[50%] m-auto"
                >
                    <div
                        class="border-2 border-black text-center w-full rounded-lg text-black p-2"
                    >
                        <p class="font-semibold">لوحة التسجيل فى المزاد</p>
                    </div>
                    <div class="flex justify-between items-center mt-1 mb-1 flex-wrap btns">
                       
                        <div>
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center"
                            >
                                مبلغ التسجيل الفردى
                            </p>
                            <input
                                type="number"
                                placeholder="15"
                                class="rounded-lg text-center"
                            />
                        </div>
                         <div>
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 mt-1 p-1 text-center"
                            >
                                الباقى من المشتركين للبدأ
                            </p>
                            <input
                                type="number"
                                placeholder="15"
                                class="rounded-lg text-center"
                            />
                        </div>
                    </div>
                    <div class="flex justify-between gap-3 items-center mt-3 flex-wrap-reverse btns">
                          <div>
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center"
                            >
                                الامر
                            </p>
                            <button class="px-4 py-2 rounded-lg border-2 border-black w-44  "> اشتراك</button>
                        </div>
                        <div>
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center"
                            >
                                بعدد اشتراكات
                            </p>
                            <input
                                type="number"
                                placeholder="2"
                                class="rounded-lg text-center"
                            />
                        </div>
                        <div>
                            <p
                                class="bg-red-500 text-white font-semibold rounded-lg mb-1 p-1 text-center"
                            >
                                مجموعة القيمة
                            </p>
                            <input
                                type="number"
                                placeholder="200"
                                class="rounded-lg text-center"
                            />
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from "@/Layouts/Layout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

export default {
    components: { Layout },
};
</script>

<style scoped>
@media (max-width:477px) {
    .cardas{
        width: 100%;
    }
    .btns{
        justify-content: center;
    }
}
</style>
