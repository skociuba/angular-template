/ --------------------------- from prisma client --------------------------- /

export interface SystemConfiguration {
    id?: string;
    key: string;
    value: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface TransportAuthority {
    id?: string;
    name: string;
    slug: string;
    contactDetails: any;
    createdAt: Date;
    updatedAt: Date;
    invoiceDetails?: InvoiceDetails;
    tickets?: any;
    mode?: boolean; // when true service mode is active
}

export interface InvoiceDetails {
    formVariant: string | null;
    formPurpose: string | null;
    formCode: string | null;
    defaultCurrencyCode: string | null;
    officeCode: string | null;
    nip: string | null;
    fullName: string | null;
    regon: string | null;
    countryCode: string | null;
    province: string | null;
    county: string | null;
    municipality: string | null;
    street: string | null;
    houseNumber: string | null;
    city: string | null;
    postalCode: string | null;
    postOffice: string | null;
    vatRate: string | null;
    mask: string | null;
}

export interface TransportLine {
    id?: string;
    name: string;
    type: string;
    transportAuthorityId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Employee {
    id?: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    password: string;
    transportAuthorityId: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id?: string;
    email: string;
    password: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface Posts {
    id: string;
    userId: string;
    title: string;
    body: string;
}

export interface CustomerInfo {
    id?: string;
    name: string;
    type: string | null;
    vatNumber: string | null;
    companyName: string | null;
    firstName: string;
    lastName: string;
    line1: string;
    line2: string | null;
    postalCode: string;
    city: string;
    phoneNumber: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Ticket {
    id?: string;
    name?: string;
    zone?: string | null;
    metadata?: any;
    durationMinutes?: number | null;
    priceWithTax?: number;
    priceWithoutTax?: number;
    config?: any;
    createdAt?: Date;
    updatedAt?: Date;
    transportAuthorityId?: string;
}

// export interface TicketInstance {
//     id?: string;
//     serialNumber: string;
//     counter: number;
//     validFrom: Date;
//     name: string;
//     zone: string | null;
//     durationMinutes: number | null;
//     priceWithTax: number;
//     priceWithoutTax: number;
//     config: any;
//     orderItemId: string;
//     ticketId: string;
//     userId: string;
//     createdAt: Date;
//     updatedAt: Date;
// }

export interface TicketCarrier {
    id?: string;
    cardNumber: string;
    cardOwner: string;
    cardExpiration: string;
    cardName: string | null;
    config: any | null;
    deleted: boolean;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    ticketInstances: any[];
}

export interface Discount {
    id?: string;
    percentage: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Tariff {
    id?: string;
    name: string;
    slug: string;
    validFrom: Date;
    validTo: Date;
    transportAuthorityId: string;
    createdAt: Date;
    updatedAt: Date;
    transportAuthority?: TransportAuthority;
}

export interface PaymentMethod {
    id?: string;
    config: any;
    transportAuthorityId: string;
    paymentOperatorId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface PaymentOperator {
    id?: string;
    name: string;
    config: any;
    createdAt: Date;
    updatedAt: Date;
}

export interface Invoice {
    id?: string;
    number: string | null;
    counter: number | null;
    sentToCustomer: boolean;
    sentToTransportAuthority: boolean;
    config: any;
    orderId: string;
    issuedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface ShoppingList {
    userId: string;
    transportAuthorityId: string;
    items?: ShoppingListItem[];
}



export interface ShoppingListTicket {
    count: number;
    ticketId: string;
    ticketCarrierId: string;
}

export interface ShoppingListProduct {
    productId: string;
    count: number;
    ticketCarrierId: string;
}

export type ShoppingListItem = ShoppingListTicket | ShoppingListProduct;

export interface Order {
    id?: string;
    status: string;
    userId: string;
    transportAuthorityId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface OrderItem {
    id?: string;
    config: any;
    count: number | null;
    orderId: string;
    ticketId: string;
    ticketCarrierId: string;
    discountId: string | null;
    transportLineId: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface OrderPayment {
    id?: string;
    orderId: string | null;
    paymentMethodId: string;
    providerTransactionId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Policy {
    id?: string;
    description: string;
    type: string;
    createdAt: Date;
}

export interface Faq {
    id?: string;
    question: string;
    answer: string;
    type: `SALE` | `COMPLAINT` | `OTHER`;
    typeSlug?: string;
}

export interface ApprovedPolicy {
    policyId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    policy?: Policy | null;
}

export interface Log {
    id?: string;
    state: any;
    employeeId: string | null;
    userId: string | null;
    createdAt: Date;
}

export interface Product {
    code: string;
    createdAt: string;
    description: string;
    file: string;
    id: string;
    isActive: boolean;
    name: string;
    priceWithTax: number;
    priceWithoutTax: number;
    referenceNumber?: string;
    updatedAt: string;
    amount: number;
}

export interface Supplier {
    id: string;
    name: string;
    description: string;
    price: number,
    type: `STATION` | `POST`;
}

export interface Station {
    name: string;
    lp: number;
}



export interface UserData {
    id?: string;
    email: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    customerInfos?: CustomerInfo[];
    ticketCarriers?: TicketCarrier[];
    approvedPolicies?: ApprovedPolicy[];
    shoppingLists?: ShoppingList[];
}
