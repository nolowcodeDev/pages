<template>
    <slot :print="print"></slot>
</template>

<script setup>
import { useLayout } from 'vuetify'

const { getLayoutItem } = useLayout()

function print(key) {
    alert(JSON.stringify(getLayoutItem(key), null, 2))
}
</script>