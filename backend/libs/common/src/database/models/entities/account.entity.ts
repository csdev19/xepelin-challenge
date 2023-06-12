import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Status } from 'libs/common/src/utils/enums/status.enum';
import { AccountPO } from '../plain_objects/account.po';
import { GenericTable } from 'libs/common/src/utils/interfaces/generic-table.interface';

@Entity('accounts')
export class AccountEntity implements GenericTable<AccountPO> {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ nullable: false })
  public balance: number;

  @Column({ nullable: false })
  public name: string;

  @Column({ nullable: false })
  public personId: number;

  // @ManyToOne(() => TransactionEntity, (entity) => entity._account_transactions)
  // @JoinColumn({ name: 'id' })
  // _transactions: TransactionEntity;

  // @Column('enum', {
  //   enum: Status,
  //   default: Status.INACTIVE,
  //   enumName: 'employee_credentials_status_enum',
  //   nullable: false,
  // })
  // public credentials_status: Status;

  @Column('enum', {
    enum: Status,
    default: Status.ACTIVE,
    // enumName: 'employee_credentials_status_enum',
    nullable: false,
  })
  public status: Status;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  public updatedAt: string | null;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  public deletedAt?: string | null;
}
