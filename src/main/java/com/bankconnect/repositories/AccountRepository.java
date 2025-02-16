package com.bankconnect.repositories;

import com.bankconnect.entities.Account;
import com.bankconnect.entities.Customer;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface AccountRepository extends JpaRepository<Account,Long> {

    @Transactional
    @Modifying
    @Query("update Account a set a.balance =?1 where a.id=?2")
    void UpdateAccountBalance(Double amount, Long id);

    Account getAccountByNumber(Long accountNum);

    Account getAccountByCustomer(Customer customer);
}
