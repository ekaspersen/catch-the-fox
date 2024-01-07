interface Window {
  VippsCheckout: any;
  VippsCheckoutDirect: any;
  // Use the appropriate type instead of any if available
}

// In a .d.ts file or at the top of your React component file
declare namespace JSX {
  interface IntrinsicElements {
    "vipps-checkout-button": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      id?: string;
      variant?: string;
      branded?: boolean;
    };
  }
}
