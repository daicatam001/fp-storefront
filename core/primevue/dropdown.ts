
export default {
    root: ({ props, state, parent }) => ({
        class: [
          // Display and Position
          'inline-flex',
          'relative',
          // Shape
          { 'rounded-md': parent.instance.$name !== 'InputGroup' },
          { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
          { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
          { 'first:ml-0 ml-[-1px]': parent.instance.$name == 'InputGroup' && !props.showButtons },
          // Color and Background
          'bg-slate-0 dark:bg-slate-900',
          'border border-slate-300',
          { 'dark:border-slate-700': parent.instance.$name != 'InputGroup' },
          { 'dark:border-slate-600': parent.instance.$name == 'InputGroup' },
          { 'border-slate-300 dark:border-slate-600': !props.invalid },
          // Invalid State
          { 'border-red-500 dark:border-red-400': props.invalid },
          // Transitions
          'transition-all',
          'duration-200',
          // States
          { 'hover:border-primary': !props.invalid },
          { 'outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50': state.focused },
          // Misc
          'cursor-pointer',
          'select-none',
          { 'opacity-60': props.disabled, 'pointer-events-none': props.disabled, 'cursor-default': props.disabled }
        ]
    }),
    input: ({ props, parent }) => {
        var _a;
        return {
          class: [
            //Font
            'leading-[normal]',
            // Display
            'block',
            'flex-auto',
            // Color and Background
            'bg-transparent',
            'border-0',
            { 'text-slate-800 dark:text-white/80': props.modelValue != null, 'text-slate-400 dark:text-slate-500': props.modelValue == null },
            'placeholder:text-slate-400 dark:placeholder:text-slate-500',
            // Sizing and Spacing
            'w-[1%]',
            'px-2 py-1',
            { 'pr-7': props.showClear },
            //Shape
            'rounded-none',
            // Transitions
            'transition',
            'duration-200',
            // States
            'focus:outline-none focus:shadow-none',
            // Filled State *for FloatLabel
            { filled: ((_a = parent.instance) == null ? void 0 : _a.$name) == 'FloatLabel' && props.modelValue !== null },
            // Misc
            'relative',
            'cursor-pointer',
            'overflow-hidden overflow-ellipsis',
            'whitespace-nowrap',
            'appearance-none'
          ]
        };
    },
    trigger: {
        class: ['flex items-center justify-center', 'shrink-0', 'bg-transparent', 'text-slate-500', 'w-8', 'rounded-tr-md', 'rounded-br-md']
    },
    panel: {
        class: ['absolute top-0 left-0', 'border-0 dark:border', 'rounded-md', 'shadow-md', 'bg-slate-0 dark:bg-slate-800', 'text-slate-800 dark:text-white/80', 'dark:border-slate-700']
    },
    wrapper: {
        class: ['max-h-[200px]', 'overflow-auto']
    },
    list: {
        class: 'py-3 list-none m-0 px-0 bg-white'
    },
    item: ({ context }) => ({
        class: [
          // Font
          'font-normal',
          'leading-none',
          // Position
          'relative',
          // Shape
          'border-0',
          'rounded-none',
          // Spacing
          'm-0',
          'py-3 px-5',
          // Colors
          {
            'text-slate-700 dark:text-white/80': !context.focused && !context.selected,
            'bg-slate-200 dark:bg-slate-600/60': context.focused && !context.selected,
            'text-primary-highlight-inverse': context.selected,
            'bg-primary-highlight': context.selected
          },
          //States
          { 'hover:bg-slate-100 dark:hover:bg-slate-600/80': !context.focused && !context.selected },
          { 'hover:bg-primary-highlight-hover': context.selected },
          'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',
          // Transitions
          'transition-shadow',
          'duration-200',
          // Misc
          { 'pointer-events-none cursor-default': context.disabled },
          { 'cursor-pointer': !context.disabled },
          'overflow-hidden',
          'whitespace-nowrap'
        ]
    }),
    itemgroup: {
        class: ['font-bold', 'm-0', 'py-3 px-5', 'text-slate-800 dark:text-white/80', 'bg-slate-0 dark:bg-slate-600/80', 'cursor-auto']
    },
    emptymessage: {
        class: ['leading-none', 'py-3 px-5', 'text-slate-800 dark:text-white/80', 'bg-transparent']
    },
    header: {
        class: ['py-3 px-5', 'm-0', 'border-b', 'rounded-tl-md', 'rounded-tr-md', 'text-slate-700 dark:text-white/80', 'bg-slate-100 dark:bg-slate-800', 'border-slate-300 dark:border-slate-700']
    },
    filtercontainer: {
        class: 'relative'
    },
    filterinput: {
        class: ['leading-[normal]', 'pr-7 py-3 px-3', '-mr-7', 'w-full', 'text-slate-700 dark:text-white/80', 'bg-slate-0 dark:bg-slate-900', 'border-slate-200 dark:border-slate-700', 'border', 'rounded-lg', 'appearance-none', 'transition', 'duration-200', 'hover:border-primary', 'focus:ring focus:outline-none focus:outline-offset-0', 'focus:ring-primary-400/50 dark:focus:ring-primary-300/50', 'appearance-none']
    },
    filtericon: {
        class: ['absolute', 'top-1/2 right-3', '-mt-2']
    },
    clearicon: {
        class: ['text-slate-500', 'absolute', 'top-1/2', 'right-12', '-mt-2']
    },
    loadingicon: {
        class: 'text-slate-400 dark:text-slate-500 animate-spin'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
}
