
export default {
    root: ({ props, context, parent }) => {
        var _a;
        return {
          class: [
            // Font
            'leading-[normal]',
            // Flex
            { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },
            // Spacing
            'm-0',
            {
              'px-4 py-4': props.size == 'large',
              'px-2 py-2': props.size == 'small',
              'p-3': props.size == null
            },
            // Shape
            { 'rounded-md': parent.instance.$name !== 'InputGroup' },
            { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
            { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
            { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },
            // Colors
            'text-slate-800 dark:text-white/80',
            'placeholder:text-slate-400 dark:placeholder:text-slate-500',
            'bg-slate-0 dark:bg-slate-900',
            'border',
            { 'border-slate-300 dark:border-slate-600': !props.invalid },
            // Invalid State
            'invalid:focus:ring-red-200',
            'invalid:hover:border-red-500',
            { 'border-red-500 dark:border-red-400': props.invalid },
            // States
            {
              'hover:border-primary': !context.disabled && !props.invalid,
              'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10': !context.disabled,
              'opacity-60 select-none pointer-events-none cursor-default': context.disabled
            },
            // Filled State *for FloatLabel
            { filled: ((_a = parent.instance) == null ? void 0 : _a.$name) == 'FloatLabel' && context.filled },
            // Misc
            'appearance-none',
            'transition-colors duration-200'
          ]
        };
    }
}
