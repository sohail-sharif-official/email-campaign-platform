type Recipient={email:string,unsubscribed:boolean,bounced:boolean};
export class Campaigns {
 private tenants=new Map<string,Map<string,Recipient>>();
 private audience(tenant:string){if(!tenant)throw Error('tenant');if(!this.tenants.has(tenant))this.tenants.set(tenant,new Map());return this.tenants.get(tenant)!}
 import(tenant:string,emails:string[]){const audience=this.audience(tenant);let added=0;for(const raw of emails){const email=raw.trim().toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))throw Error('invalid email');if(!audience.has(email)){audience.set(email,{email,unsubscribed:false,bounced:false});added++}}return added}
 suppress(tenant:string,email:string,reason:'unsubscribe'|'bounce'){const r=this.audience(tenant).get(email.toLowerCase());if(r){if(reason==='unsubscribe')r.unsubscribed=true;else r.bounced=true}}
 batch(tenant:string,limit:number){if(!Number.isInteger(limit)||limit<1)throw Error('limit');return [...this.audience(tenant).values()].filter(r=>!r.unsubscribed&&!r.bounced).slice(0,limit).map(r=>({...r}))}
}
