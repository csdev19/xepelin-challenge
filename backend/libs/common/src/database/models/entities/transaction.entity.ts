import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Status } from 'libs/common/src/utils/enums/status.enum';
import { TransactionPO } from '../plain_objects/transaction.po';
import { GenericTable } from 'libs/common/src/utils/interfaces/generic-table.interface';

@Entity('transactions')
export class TransactionEntity implements GenericTable<TransactionPO> {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ nullable: false })
  public balance: number;

  @Column({ nullable: false })
  public name: number;

  @Column('enum', {
    enum: Status,
    default: Status.ACTIVE,
    // enumName: 'employee_credentials_status_enum',
    nullable: false,
  })
  public status: Status;

  @Column({ nullable: false })
  public amount: number;

  // @OneToMany(() => AccountEntity, (entity) => entity._transactions)
  // _account_transactions: AccountEntity[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  public updatedAt: string | null;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  public deletedAt?: string | null;
}
