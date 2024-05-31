<template>
    <Paginator :rows="10"
        :pt="paginator"
        :totalRecords="120"></Paginator>
</template>
<script setup>

const paginator = {
    root: {
        class: ['flex items-center justify-center flex-wrap', 'px-6 py-2', 'border-0', 'bg-slate-0 dark:bg-slate-800', 'text-slate-500 dark:text-white/60']
    },
    firstpagebutton: ({ context }) => ({
        class: [
            'hidden'
        ]
    }),
    previouspagebutton: ({ context }) => ({
        class: [
            'relative',
            // Flex & Alignment
            'inline-flex items-center justify-center',
            // Shape
            'border rounded-full dark:rounded-md',
            // Size
            'min-w-[2rem] lg:min-w-[3rem] h-8 lg:h-12 m-1',
            'leading-none',
            // Color
            'text-black bg-white',
            // State
            {
                'hover:border-2 hover:font-bold': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled
            },
            // Transition
            'transition duration-200',
            // Misc
            'user-none overflow-hidden',
            { 'opacity-0 invisible': context.disabled }
        ]
    }),
    nextpagebutton: ({ context }) => ({
        class: [
            'relative',
            // Flex & Alignment
            'inline-flex items-center justify-center',
            // Shape
            'border rounded-full dark:rounded-md',
            // Size
            'min-w-[2rem] lg:min-w-[3rem] h-8 lg:h-12 m-1',
            'leading-none',
            // Color
            'text-black bg-white',
            // State
            {
                'hover:border-2 hover:font-bold': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled
            },
            // Transition
            'transition duration-200',
            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none opacity-60': context.disabled }
        ]
    }),
    lastpagebutton: ({ context }) => ({
        class: [
            'hidden'
        ]
    }),
    pagebutton: ({ context }) => ({
        class: [
        'relative',
            // Flex & Alignment
            'inline-flex items-center justify-center',
            // Shape
            'border rounded-full dark:rounded-md',
            // Size
            'min-w-[2rem] lg:min-w-[3rem] h-8 lg:h-12 m-1',
            'leading-none',
            // Color
            'text-black bg-white',
            {
                'border-2 font-bold': context.active
            },
            // State
            {
                'hover:border-2 hover:font-bold': !context.disabled && !context.active,
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled
            },
            // Transition
            'transition duration-200',
            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none opacity-60': context.disabled }
        ]
    }),
}

</script>