import {
	AllEntities,
	Entity,
	PropertiesOf,
} from 'n8n-workflow';

type SyncroMspMap = {
	customer: 'getAll' | 'addCustomer' | 'deleteCustomer' | 'updateCustomer' | 'getCustomer';
	ticket: 'getAll';
	contact: 'getAll' | 'addContact' | 'deleteContact' | 'updateContact' | 'getContact';
	rmm: 'getAlerts';
};

export type SyncroMsp = AllEntities<SyncroMspMap>;

export type SyncroMspMapCustomer = Entity<SyncroMspMap, 'customer'>;
export type SyncroMspMapTicket = Entity<SyncroMspMap, 'ticket'>;
export type SyncroMspMapContact = Entity<SyncroMspMap, 'contact'>;
export type SyncroMspMapRmm = Entity<SyncroMspMap, 'rmm'>;

export type CustomerProperties = PropertiesOf<SyncroMspMapCustomer>;
export type TicketProperties = PropertiesOf<SyncroMspMapTicket>;
export type ContactProperties = PropertiesOf<SyncroMspMapContact>;
export type RmmProperties = PropertiesOf<SyncroMspMapRmm>;

export interface IAttachment {
	fields: {
		item?: object[];
	};
	actions: {
		item?: object[];
	};
}